'use client';

import apiClient from '@/api/ApiClient';
import { SignInReq } from '@/api/domain/auth/request/SignInReq';
import { SignInRes } from '@/api/domain/auth/response/SignInRes';
import { SignInViewModel } from '@/api/domain/auth/view-model/SignInViewModel';
import { ViewModelMapper } from '@/api/support/view-model/ViewMapper';

export class AuthMutation {
  static async signIn(req: SignInReq): Promise<ViewModelMapper<SignInViewModel | null>> {
    const payload = req.toPayload();

    const apiResponse = await apiClient<SignInRes>({
      apiType: 'MOCK',
      urlPath: `/data/userData.json`,
      method: 'GET',
      data: payload,
    });

    const result = ViewModelMapper.of(apiResponse, SignInViewModel);
    if (result.result === 'SUCCESS' && result.data) {
      const { accessJwt, refreshJwt } = result.data;
      if (accessJwt && refreshJwt) {
        // 쿠키로 저장
        document.cookie = `access_jwt=${accessJwt}; path=/; max-age=${60 * 30}; SameSite=Lax`;
        document.cookie = `refresh_jwt=${refreshJwt}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
        console.log('[MOCK MODE] 토큰 저장 완료:', {
          accessJwt,
          refreshJwt,
        });
      }
    }

    return result;
  }
}
