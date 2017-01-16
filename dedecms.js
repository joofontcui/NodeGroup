/**
 * Created by Cuijun on 2016/12/5.
 */
mvc理解

标签：
// 遍历栏目id = 1的内容：time + title
1.{dede:arclist typeid='1' row='10' flag='c'}
[field:pubdate function="MyDate('Y-m-d',@me)"/]   [field:title/]
{/dede:arclist}


problem：
1.你指定的文件名有问题，无法创建文件
linux权限问题，文件不能写入