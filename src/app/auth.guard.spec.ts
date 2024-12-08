import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: authGuard;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        authGuard,
        { provide: Router, useValue: mockRouter },
      ],
    });
    guard = TestBed.inject(authGuard);
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it('debería crearse el guard', () => {
    expect(guard).toBeTruthy();
  });

  it('debería permitir el acceso si el token existe', () => {
    sessionStorage.setItem('token', 'example-token');
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTrue();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('debería bloquear el acceso y redirigir a /login si no hay token', () => {
    const canActivate = guard.canActivate();
    expect(canActivate).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
