import { Critter } from './critter';
import * as Critters from './critters';

describe('critter', () => {
  describe('caloriesNeeded', () => {
    it('Morb does not require any calories', () => {
      expect(Critters.morb.caloriesNeeded).toEqual(0);
    });
    it('Drecko requies 3.33 kcal/s', () => {
      expect(Critters.drecko.caloriesNeeded).toEqual(3330);
    });
  });
  describe('hitPoint', () => {
    it("Stone Hatch's HP was overried", () => {
      expect(Critters.stoneHatch.hitPoint).toEqual(200);
    });
  });
  describe('lightEmitter', () => {
    it('Shine Bug has lightEmitter', () => {
      expect(Critters.shineBug.lightEmitter).toEqual({ range: 5, lux: 1800 });
    });
    it('Abyss Bug has not lightEmitter', () => {
      expect(Critters.abyssBug.lightEmitter).toBeNull();
    });
  });
  describe('emojiName', () => {
    it("Hatch's emoji code is `:hatch:`", () => {
      expect(Critters.hatch.emojiCode).toEqual(':hatch:');
    });
    it("Sage Hatch's emoji code is `:sagehatch:`", () => {
      expect(Critters.sageHatch.emojiCode).toEqual(':sagehatch:');
    });
  });
  describe('Critter.findByName', () => {
    it('can not find "stinky"', () => {
      const dupe = Critter.findByName('stinky');
      expect(dupe).toBeNull();
    });
    it('can find "hatch"', () => {
      const result = Critter.findByName('hatch');
      expect(result).not.toBeNull();
      expect(result.id).toEqual(Critters.hatch.id);
    });
    it('can find "sagehatch" => Sage Hatch', () => {
      const result = Critter.findByName('sagehatch');
      expect(result).not.toBeNull();
      expect(result.id).toEqual(Critters.sageHatch.id);
    });
    it('can find "sage hatch" => Sage Hatch', () => {
      const result = Critter.findByName('sage hatch');
      expect(result).not.toBeNull();
      expect(result.id).toEqual(Critters.sageHatch.id);
    });
    it('can find "ハッチ"', () => {
      const target = Critters.hatch;
      const result = Critter.findByName('ハッチ');
      expect(result).not.toBeNull();
      expect(result.id).toEqual(target.id);
    });
    it('can find Puft Prince by "プリンス"', () => {
      const target = Critters.puftPrince;
      const result = Critter.findByName('プリンス');
      expect(result).not.toBeNull();
      expect(result?.id).toEqual(target.id);
    });
  });
});
