import sum from '../modules/sum';
import { describe, test, expect } from 'vitest';

describe('sum function',()=>{
    test('sum of positive numbers',()=>{
        expect(sum(1,4)).toBe(5);
    })
})
