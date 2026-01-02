export const getServerRefreshToken = async (): Promise<string | null> => {
  const { cookies } = await import('next/headers');

  const cookieStore = await cookies();

  const refreshToken = cookieStore.get('refreshToken')?.value || null;

  return refreshToken;
};

export const getServerAccessToken = async (): Promise<string | null> => {
  const { cookies } = await import('next/headers');

  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken')?.value || null;

  return accessToken;
};

export const getServerLocale = async (): Promise<string> => {
  const { cookies } = await import('next/headers');

  const cookieStore = await cookies();

  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ko';

  return locale;
};

export const getClientRefreshToken = (): string => {
  const refreshToken =
    document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('refresh_jwt'))
      ?.split('=')[1] || '';

  return refreshToken;
};

export const getClientAccessToken = (): string => {
  const accessToken =
    document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('access_jwt'))
      ?.split('=')[1] || '';

  return accessToken;
};

export const getClientLocale = (): string => {
  const locale =
    document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('NEXT_LOCALE'))
      ?.split('=')[1] || 'ko';

  return locale;
};
