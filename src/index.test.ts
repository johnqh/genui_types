import { describe, it, expect } from 'vitest';
import { FontWeight, ThemeColor, ScreenLayout, ViewLayout } from './index';

describe('genui_types', () => {
  it('exports FontWeight constants', () => {
    expect(FontWeight.TITLE).toBe('TITLE');
    expect(FontWeight.BODY).toBe('BODY');
  });

  it('exports ThemeColor constants', () => {
    expect(ThemeColor.LABEL).toBe('LABEL');
    expect(ThemeColor.SYSTEM_BLUE).toBe('SYSTEM_BLUE');
  });

  it('exports ScreenLayout constants', () => {
    expect(ScreenLayout.TABS).toBe('tabs');
    expect(ScreenLayout.VIEW).toBe('view');
  });

  it('exports ViewLayout constants', () => {
    expect(ViewLayout.LIST).toBe('list');
    expect(ViewLayout.MAP).toBe('map');
    expect(ViewLayout.MAP_PIN).toBe('map_pin');
    expect(ViewLayout.INPUT_TEXT).toBe('input_text');
  });
});
