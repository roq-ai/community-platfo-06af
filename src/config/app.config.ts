interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Moderator', 'Subscriber', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Community platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Manage content data',
    'Manage forum and discussion data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/691cc563-2864-497d-9302-64bf235e817d',
};
