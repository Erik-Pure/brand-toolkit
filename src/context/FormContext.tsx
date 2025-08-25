import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the form data structure
export interface FormData {
  // Brand Audit
  brandAudit: {
    companyName: string;
    whatYouDo: string;
    brandHeart: string;
    targetAudience: string;
    competition: string;
    differentiators: string;
    brandPersonality: string;
    tagline: string;
    valueProposition: string;
    keyMessages: string;
    voice: string;
    brandPersonality2: string;
    logo: string;
    colorPalette: string;
    typography: string;
    other: string;
    reflectPersonality: string;
    communicateValues: string;
    standOut: string;
    improvementOpportunities: string;
  };
  
  // Competitor Audit
  competitorAudit: {
    competitor1: string;
    competitor2: string;
    competitor3: string;
    competitor1Logo: string;
    competitor1Typography: string;
    competitor1ColorPalette: string;
    competitor1Other: string;
    competitor2Logo: string;
    competitor2Typography: string;
    competitor2ColorPalette: string;
    competitor2Other: string;
    competitor3Logo: string;
    competitor3Typography: string;
    competitor3ColorPalette: string;
    competitor3Other: string;
  };
  
  // Attribute Spectrum
  attributeSpectrum: {
    exclusiveAccessible: number;
    traditionalProgressive: number;
    corporateFriendly: number;
    seriousFun: number;
    cautiousBold: number;
    simpleComplex: number;
    urbanNatural: number;
    familiarDisruptive: number;
    stableDynamic: number;
    realisticIdealistic: number;
    attribute1: string;
    attribute2: string;
    attribute3: string;
    attribute4: string;
    attribute5: string;
  };
  
  // Brand Brief
  brandBrief: {
    projectName: string;
    projectOverview: string;
    goals: string;
    successMetrics: string;
    deliverables: string;
    stakeholders: string;
    targetAudience: string;
    keyAttributes: string;
    mainMessage: string;
    budget: string;
    timeline: string;
    specifications: string;
    otherConsiderations: string;
  };
  
  // Brand Checklist
  brandChecklist: {
    logo: boolean;
    colorPalette: boolean;
    typography: boolean;
    imagery: boolean;
    applications: boolean;
    guidelines: boolean;
    testing: boolean;
  };
}

// Initial state
const initialState: FormData = {
  brandAudit: {
    companyName: '',
    whatYouDo: '',
    brandHeart: '',
    targetAudience: '',
    competition: '',
    differentiators: '',
    brandPersonality: '',
    tagline: '',
    valueProposition: '',
    keyMessages: '',
    voice: '',
    brandPersonality2: '',
    logo: '',
    colorPalette: '',
    typography: '',
    other: '',
    reflectPersonality: '',
    communicateValues: '',
    standOut: '',
    improvementOpportunities: '',
  },
  competitorAudit: {
    competitor1: '',
    competitor2: '',
    competitor3: '',
    competitor1Logo: '',
    competitor1Typography: '',
    competitor1ColorPalette: '',
    competitor1Other: '',
    competitor2Logo: '',
    competitor2Typography: '',
    competitor2ColorPalette: '',
    competitor2Other: '',
    competitor3Logo: '',
    competitor3Typography: '',
    competitor3ColorPalette: '',
    competitor3Other: '',
  },
  attributeSpectrum: {
    exclusiveAccessible: 50,
    traditionalProgressive: 50,
    corporateFriendly: 50,
    seriousFun: 50,
    cautiousBold: 50,
    simpleComplex: 50,
    urbanNatural: 50,
    familiarDisruptive: 50,
    stableDynamic: 50,
    realisticIdealistic: 50,
    attribute1: '',
    attribute2: '',
    attribute3: '',
    attribute4: '',
    attribute5: '',
  },
  brandBrief: {
    projectName: '',
    projectOverview: '',
    goals: '',
    successMetrics: '',
    deliverables: '',
    stakeholders: '',
    targetAudience: '',
    keyAttributes: '',
    mainMessage: '',
    budget: '',
    timeline: '',
    specifications: '',
    otherConsiderations: '',
  },
  brandChecklist: {
    logo: false,
    colorPalette: false,
    typography: false,
    imagery: false,
    applications: false,
    guidelines: false,
    testing: false,
  },
};

// Action types
type FormAction = 
  | { type: 'UPDATE_BRAND_AUDIT'; field: keyof FormData['brandAudit']; value: string }
  | { type: 'UPDATE_COMPETITOR_AUDIT'; field: keyof FormData['competitorAudit']; value: string }
  | { type: 'UPDATE_ATTRIBUTE_SPECTRUM'; field: keyof FormData['attributeSpectrum']; value: string | number }
  | { type: 'UPDATE_BRAND_BRIEF'; field: keyof FormData['brandBrief']; value: string }
  | { type: 'UPDATE_BRAND_CHECKLIST'; field: keyof FormData['brandChecklist']; value: boolean }
  | { type: 'LOAD_FROM_STORAGE'; data: FormData }
  | { type: 'RESET_ALL' };

// Reducer function
function formReducer(state: FormData, action: FormAction): FormData {
  switch (action.type) {
    case 'UPDATE_BRAND_AUDIT':
      return {
        ...state,
        brandAudit: {
          ...state.brandAudit,
          [action.field]: action.value,
        },
      };
    
    case 'UPDATE_COMPETITOR_AUDIT':
      return {
        ...state,
        competitorAudit: {
          ...state.competitorAudit,
          [action.field]: action.value,
        },
      };
    
    case 'UPDATE_ATTRIBUTE_SPECTRUM':
      return {
        ...state,
        attributeSpectrum: {
          ...state.attributeSpectrum,
          [action.field]: action.value,
        },
      };
    
    case 'UPDATE_BRAND_BRIEF':
      return {
        ...state,
        brandBrief: {
          ...state.brandBrief,
          [action.field]: action.value,
        },
      };
    
    case 'UPDATE_BRAND_CHECKLIST':
      return {
        ...state,
        brandChecklist: {
          ...state.brandChecklist,
          [action.field]: action.value,
        },
      };
    
    case 'LOAD_FROM_STORAGE':
      return action.data;
    
    case 'RESET_ALL':
      return initialState;
    
    default:
      return state;
  }
}

// Context interface
interface FormContextType {
  formData: FormData;
  updateBrandAudit: (field: keyof FormData['brandAudit'], value: string) => void;
  updateCompetitorAudit: (field: keyof FormData['competitorAudit'], value: string) => void;
  updateAttributeSpectrum: (field: keyof FormData['attributeSpectrum'], value: string | number) => void;
  updateBrandBrief: (field: keyof FormData['brandBrief'], value: string) => void;
  updateBrandChecklist: (field: keyof FormData['brandChecklist'], value: boolean) => void;
  resetAll: () => void;
  exportData: () => void;
}

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('brandToolkitFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_FROM_STORAGE', data: parsedData });
      } catch (error) {
        console.error('Error loading form data from localStorage:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('brandToolkitFormData', JSON.stringify(formData));
  }, [formData]);

  // Action creators
  const updateBrandAudit = (field: keyof FormData['brandAudit'], value: string) => {
    dispatch({ type: 'UPDATE_BRAND_AUDIT', field, value });
  };

  const updateCompetitorAudit = (field: keyof FormData['competitorAudit'], value: string) => {
    dispatch({ type: 'UPDATE_COMPETITOR_AUDIT', field, value });
  };

  const updateAttributeSpectrum = (field: keyof FormData['attributeSpectrum'], value: string | number) => {
    dispatch({ type: 'UPDATE_ATTRIBUTE_SPECTRUM', field, value });
  };

  const updateBrandBrief = (field: keyof FormData['brandBrief'], value: string) => {
    dispatch({ type: 'UPDATE_BRAND_BRIEF', field, value });
  };

  const updateBrandChecklist = (field: keyof FormData['brandChecklist'], value: boolean) => {
    dispatch({ type: 'UPDATE_BRAND_CHECKLIST', field, value });
  };

  const resetAll = () => {
    dispatch({ type: 'RESET_ALL' });
    localStorage.removeItem('brandToolkitFormData');
  };

  const exportData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'brand-toolkit-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const value: FormContextType = {
    formData,
    updateBrandAudit,
    updateCompetitorAudit,
    updateAttributeSpectrum,
    updateBrandBrief,
    updateBrandChecklist,
    resetAll,
    exportData,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
