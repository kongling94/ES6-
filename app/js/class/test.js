// {
//     console.log('a','\u0061');
//     //字符大于0xFFFF的情况下 会出现乱码
//     console.log('s','\u20BB7');
//     //修改 使用ES6中的{} 包裹字符
//     console.log('a','\u{20BB7}')
// }
//
// {   //ES6 中的模板输出
//     let name='klh',age=18;
//     let template =` i am ${name},${age} `;
//      console.log( template)
// }
//
// {  //补位
//     //如果是两位的，第一位是1，那么第二位结束补0
//     console.log('1'.padEnd(2,'0'));
//     //如果是3位的，末位是2，那么开始的第1,2位补3
//     console.log('2'.padStart(3,'3'));
// }
//
// {   //标签模板
//     let user={
//         name:'陈小墨',
//         info:'hi，baby'
//     };
//     //定义模板
//     abc`i am ${user.name},say: ${user.info}`;
//     // s是模板 v1,v2是模板变量
//     function abc(s,v1,v2){
//         console.log(s,v1,v2);
//         return s+v1+v2
//     }
// }


{//函数的默认值
    function test(x,y='default->默认值'){
        console.log('test函数的默认值',x,y);
    }
    test('呵呵哒')
}
