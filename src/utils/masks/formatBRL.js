import { brl2Int, int2Brl } from "../real";

export default v => v === '' ? '' : int2Brl(brl2Int(v))


// format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')
