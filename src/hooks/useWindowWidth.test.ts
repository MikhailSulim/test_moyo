import { renderHook, act } from '@testing-library/react';

import { useWindowWidth } from './useWindowWidth';

describe('useWindowWidth', () => {
  test('возвращает текущую ширину окна', () => {
    const { result } = renderHook(() => useWindowWidth());

    expect(result.current).toBe(window.innerWidth);
  });

  test('обновляет ширину окна при изменении размера', () => {
    const { result } = renderHook(() => useWindowWidth());

    act(() => {
      // Имитируем изменение размера окна
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(800);
  });

  test('не вызывает ошибок при монтировании и размонтировании', () => {
    const { unmount } = renderHook(() => useWindowWidth());

    expect(() => {
      unmount();
    }).not.toThrow();
  });
});