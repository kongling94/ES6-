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


// {//函数的默认值
//     function test(x,y='default->默认值'){
//         console.log('test函数的默认值',x,y);
//     }
//     test('呵呵哒')
// }
//
// {
//     let x='out';
//     function item(x,y=x){
//         console.log(x,y)
//     }
//     item('inner')
// }
//
// {
//     function getArrayItem(...ary){
//         for(let item of ary){
//             console.log(item)
//         }
//     }
//     getArrayItem(1,2,3,4,5,6,'g')
// }

{//对象的新增
    //简洁语法
    let name='momo';
    let age=18;

    let abc={
        name,
        age
    }
    console.log(abc)

    //方法
    let methods={
        say:function(){
            console.log('es5',"my lover is K");
        }
    }
    let method1={
        say(){
            console.log('es6',"my lover is K");
        }
    }
}


// {
//     //属性
//     let c ='fff';
//     let ObjAttr={
//         a:'b',
//         c:'d'
//     }
//
//     //[c]的意思是获取变量c的值作为es6_obj的key
//     let es6_obj={
//         [c]:'gg'
//     }
//     console.log(es6_obj);
// }
//
// {
//     let a1=Symbol("你好");
//     let a2=Symbol.for('a2');
//     let a3=Symbol.for('a2');
//     console.log(a2===a3);
// }
//
// {   //可以避免重名报错的情况
//     let a2=Symbol.for('aaa');
//     let obj={
//         [a2]:'abcd',
//         aaa:'ccc'
//     }
//     console.log(obj);
// }

{
    let list=new Set();
    list.add(5);
    list.add(7);
    //打印长度
    console.log(list.size);
}

{
    let arr=[1,2,3,4,5];
    let item=new Set(arr);
    // 打印长度
    console.log(item.size);
}
{
    let ary1=new Set();
    ary1.add(1);
    ary1.add(2);
    //重复添加 但是不报错，可以用在数组去重
    ary1.add(1);
    console.log(ary1);
}

{//map和array的增删改查
    let map=new Map();
    let array=[];
    //增
    map.set('a',1);
    array.push({b:2});
    console.log(map,array);
    //查
    let map_has=map.has('a');
    let ary_has=array.find(item=>{item.t});

    //改
    map.set('a','aa');
    array.forEach(item=>item.t?item.t=2:'');
    //删
    map.delete('a');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1)
}

{
    //set和array的对比
    let set=new Set();
    let ary=[];
    //增
    set.add({t:1});
    ary.push({'aa':12})

    //查
    let set_has=set.has({t:1}); //能返回值，但是会报错，因为引用的是这个对象的内存地址，可如果想要返回true需要先把这个对象保存下载
    let ary_has=ary.find(item=>item.aa)
    //改
    set.forEach(item=>item.t?item.t=2:"");
    ary.forEach(item=>item.aa?item.aa=22:"");
    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=ary.findIndex(item=>item.aa);
    ary.splice(index,1)
// set和array改、删都比较麻烦
}

{
//map、set、object的对比
 let map=new Map();
 let set=new Set();
 let obj={t:1};
 let item={t:12}
  //增加
  map.set({'t':12})
  set.add(item);
  obj['c']=13;
  //查
  map.has('t');
  set.has(item);
  for(let key in obj){
      obj[key]
  }
  //改
  map.set('t',2);
  //因为set是引用item这个对象的内存地址，所以直接修改item.t=2
  obj['t']=3;
  //删
  map.delete('t');
  set.delete(item);
  delete obj['t'];
}


//proxy代理和relfect反射
{
    let obj={
        time:'2017-12-1',
        name:'www.momo.com',
        _r:123
    }

    let proxy_item=new Proxy(obj,{
        //代理对象属性的属性
        get(target,key){
            return target[key].replace('2017','2018')
        },
        set(target,key,value){
            if(key ==='name'){
                return target[key]=value;
            }else{
                return target[key];
            }
        },
        //拦截key in object
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                false;
            }
        },
        del(target,key){
            if(key.indOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return false;
            }
        }
    })
    console.log(proxy_item.time);
    proxy_item.name='www.baidu.com'
    console.log(proxy_item.name);
}

{
    let obj={
        name:'momo',
        age:18,
        sayHI(){
            console.log('My name is'+this.name,'age is'+this.age)
        }
    }
    console.log(Reflect.get(obj,'age'));
    console.log(Reflect.set(obj,'name','klh'))
    console.log(Reflect.get(obj,'name'))
}

{   //做一个数据代理的过滤函数
    //参数1 目标  参数2 配置选项
    function PilterData(target,filterData){
        // 返回的是一个proxy对象处理过的信息
        return new Proxy(target,{
            //保存配置项到当前
            _filterData:filterData,
            //代理拦截的set方法
            set(target,key,value,proxy){
                //判断是否是目标的私有属性
                if(target.hasOwnProperty(key)){
                    //交给配置选项进行处理
                    let va=this._filterData[key];
                    //判断结果
                    if(!!va(value)){
                        return  Reflect.set(target,key,value,proxy)
                    }else{
                    //抛出错误
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key} undifined`)
                }
            }
        })
    }
    //配置选项
    const options={
        name(val){
            return typeof val === 'String';
        },
        age(val){
            return typeof val ==='number'
        }
    }
    //创建的类 返回的是经过 自己定义的proxy对象处理过的数据
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            return PilterData(this,options)
        }
    }
    const person1=new Person('lilei',30);
    // person1.name=25;
    console.log(person1);
}


{
    //类的继承
    class Person{
        constructor(name,age=20){
            this.name=name;
            this.age=age;
        }
    }
    class Boy extends Person{
        constructor(name='baby'){
            //传递给父类
            super(name);    //放在第一行
            this.type='child';
        }
    }
    console.log(new Boy());
}

{
    class Person{
        constructor(name,age=20){
            this.name=name;
            this.age=age;
        }
        get longName(){
            return 'woca：'+this.name;
        }
        set longName(value){
            this.name=value;
        }
    }
    let obj=new Person();
    obj.name='zsd';
    obj.longName='nihao';
    console.log(obj.longName);
}
