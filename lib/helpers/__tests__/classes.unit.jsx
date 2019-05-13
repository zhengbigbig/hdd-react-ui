import classes from '../classes'
import {scopedClassMaker} from "../classes";

describe('classes', () => {
  it('接受 1 个 className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受 2 个 className', ()=>{
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受 undefined 结果不会出现 undefined', ()=>{
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受各种奇怪值', ()=>{
    const result = classes(
      'a', undefined, '中文', false, null
    )
    expect(result).toEqual('a 中文')
  })
  it('接受 0 个参数', ()=>{
    const result = classes()
    expect(result).toEqual('')
  })
  it('scopedClassMaker接受一个string', ()=>{
    const ap = scopedClassMaker('hdd-button')
    const result = ap('')
    expect(result).toEqual('hdd-button')
  })
  it('scopedClassMaker接受一个string', ()=>{
    const ap = scopedClassMaker('hdd-button')
    const result = ap('xxx')
    expect(result).toEqual('hdd-button-xxx')
  })
  it('scopedClassMaker options接受一个额外的className', ()=>{
    const ap = scopedClassMaker('hdd-button')
    const result = ap('x',{extra:'xxx'})
    expect(result).toEqual('hdd-button-x xxx')
  })
  it('scopedClassMaker name接受一个对象', ()=>{
    const ap = scopedClassMaker('hdd-button')
    const result = ap({x:true,y:false},{extra:'xxx'})
    expect(result).toEqual('hdd-button-x xxx')
  })
  it('scopedClassMaker name接受一个数组', ()=>{
    const ap = scopedClassMaker('hdd-button')
    const result = ap(['xxx','yyy','zzz'],{extra:'xxx'})
    expect(result).toEqual('hdd-button-xxx hdd-button-yyy hdd-button-zzz xxx')
  })
})
