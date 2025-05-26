export const getUserType = () => {
    const roles: string[] = JSON.parse(localStorage.getItem('user_role') || '[]');
    if (roles.includes('Sales Person')) return 'B2B';
    if (roles.includes('POS Sales Person')) return 'B2C';
    return null;
  };
  