export interface UserPlan {
  emailsSent: number;
  emailsLimit: number;
  smsSent: number;
  smsLimit: number;
  whatsappSent: number;
  whatsappLimit: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface CompetitorData {
  name: string;
  strategy: string;
  audience: string;
  engagement: number;
  trending: boolean;
}

export interface MarketingChannel {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
}

export interface AudienceSegment {
  id: string;
  name: string;
  size: number;
  conversion: number;
  selected: boolean;
}