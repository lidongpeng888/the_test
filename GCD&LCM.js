/*
* 最大公约数 用辗转相除法
*
* 例如，求（319，377）：
∵ 319÷377=0（余319）
∴（319，377）=（377，319）；
∵ 377÷319=1（余58）
∴（377，319）=（319，58）；
∵ 319÷58=5（余29）
∴ （319，58）=（58，29）；
∵ 58÷29=2（余0）
∴ （58，29）= 29；
∴ （319，377）=29。
* */
const getGCD = (m, n) => {
    let max = m > n ? m : n
    let min = m < n ? m : n
    while (max % min != 0) {
        [max, min] = [min, max % min]
    }
    return min
}
/*
*最小公倍数
* 最小公倍数=两个数的乘积除以两个数的最大公约数
* */
const getLCM=(m,n)=>{
    return m*n/getGCD(m,n)
}
const stein=(m,n)=>{
    if(a==0||b==0)return a==0?b:a;
    if(a&1==0&&b&1==0)return 2*stein(a>>1,b>>1);
    if(a&1==0)return stein(a>>1,b);
    if(b&1==0)return stein(a,b>>1);
    return stein(Math.min(a,b),Math.abs(a-b))
}