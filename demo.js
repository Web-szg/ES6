const scanf=require('scanf');
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));
// let arr=[1,2,3,4,5];
// for(i=0;i<arr.length;i++){
//     let a=arr[i];
//     console.log(a);
// }
// console.log('欢迎进入幸运数字系统');
// console.log('********************');
// let arr=[];
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---查询所有幸运数字');
//     console.log('3---删除一个幸运数字');
//     console.log('4---退出系统，再见！');
//     let a=scanf('%d');
//     if (a===1) {
//         console.log('1---添加一个幸运数字');
//         let b=scanf('%d');
//         arr.push(b);
//         console.log('添加成功');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (a===2) {
//         console.log('2---查询所有幸运数字');
//         for (let i = 0; i<arr.length; i++) {
//             let x = arr[i];
//             console.log(x);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (a===3) {
//         console.log('3---删除一个幸运数字');
//         arr.pop();
//         console.log('删除成功');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (a===4) {
//         console.log('4---退出系统，再见！');
//         break;
//     }
// }
// let x={
//     a:1,
//     b:2,
// }
// console.log(x);
// console.log('坐标：('+x.a+','+x.b+')');
// console.log('\n');
// console.log('********************');
// console.log('欢迎来到坐标管理系统');
// console.log('********************');
// let arr=[];
// while (1) {
//     console.log('1---添加一个坐标');
//     console.log('2---查询所有坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出系统');
//     let c=scanf('%d');
//     if (c===1) {
//         console.log('1---添加一个坐标');
//         console.log('请输入横坐标a：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标b：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y
//         }
//         arr.push(zuobiao);
//         console.log('添加成功，点击回车继续')
//         scanf('%d');
//     }
//     if (c===2) {
//         console.log('2---查询所有坐标');
//         for (let i = 0; i < arr.length; i++) {
//             let q = arr[i];
//             console.log(`第${i+1}个坐标为：(${q.x},${q.y})`);
//         }
//         console.log('查询成功，点击回车继续')
//         scanf('%d');
//     }
//     if (c===3) {
//         console.log('3---删除最后一个坐标');
//         arr.pop();
//         console.log('删除成功，点击回车继续');
//         scanf('%d');
//     }
//     if (c===4) {
//         console.log('4---退出系统');
//         break;
//     }
// }
console.log('\n');
console.log('********************');
console.log('欢迎来到学生管理系统');
console.log('********************');
let arr=[];
while (1) {
    console.log('1---添加一个学生学科成绩');
    console.log('2---查询学生所有的学科成绩');
    console.log('3---删除最后一个学生的学科成绩');
    console.log('4---退出学生管理系统');
    let a=scanf('%d');
    if (a===1) {
        console.log('1---添加一个学生学科成绩');
        console.log('添加的学生姓名：');
        let xingming=scanf('%s');
        console.log('添加的学生语文成绩：');
        let x=scanf('%f');
        console.log('添加的学生语文成绩：');
        let y=scanf('%f');
        let xuesheng={
            'xingming':xingming,
            'x':x,
            'y':y
        }
        arr.push(xuesheng);
        console.log('添加成功，点击回车继续');
        scanf('%d');
    }
    if (a===2) {
        console.log('2---查询学生所有的学科成绩');
        for (let i = 0; i < arr.length; i++) {
            let z = arr[i];
            console.log(`学生姓名：${z.xingming}\n语文成绩：${z.x}\n数学成绩：${z.y}`);
        }
        console.log('查询成功，点击回车继续');
        scanf('%d');
    }
    if (a===3) {
        console.log('3---删除最后一个学生的学科成绩');
        arr.pop();
        console.log('删除成功，点击回车继续');
        scanf('%d');
    }
    if (a===4) {
        console.log('4---退出学生管理系统');
        break;
    }
}