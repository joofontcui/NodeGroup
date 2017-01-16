/**
 * Created by Cuijun on 2016/12/17.
 */
function 命令行(){
    service nginx restart 重启nginx服务;
}


function 新建文件(){
    var 1 = 新建文件夹命令：mkdir  文件夹名称;
    var 2 = 创建文档就用：vi 文件名,然后就可以编辑文档了，退出的时候依次按ESC -> : ->x  就退出并保存了，:wq 保存后退出。：x 同“ wq”。:q! – 不保存内容， 强制退出;
    var 3 = 编辑操作上下左右： g h j k;
}


function 删除文件(){
    var 1 = 删除文件夹：rm [选项] 文件夹名称。如rm -r test;
    var 2 = 删除文件：rm 文件名 。如：rm test.txt;
}


/**
 * 这里不是很熟悉 2016.12.17
 */
function 修改文件(){
    vi命令。vi 文件名这样就可以打开一个文件，再点击i就可以进入编辑了。其实编辑命令还有：o，a。我这里比较熟悉i的使用：退出点击esc键，就进入命令模式;
    常见的命令，如下:

    {
        x:删除当前字符;
        dd：删除当前行;
        2dd：删除文件的当前行和后一行;
        u:恢复前一步操作;
        p:复制之前删除的行;
        yy:复制光标所在的整行;
        2yy:复制2行，举一反三 3yy;
        p:粘贴到光标的后面;
    }
}


function 查看文件(){
    var 1 = 查看目录下的所有文件又2种命令：ll 和ls 。 ll会列出该文件下的所有文件信息，包括隐藏的文件，而ls 只列出显式文件名;
    var 2 = 查看某个文件内容也有2种：cat 和 vi 。cat主要有三大功能:一次显示整个文件：$ cat filenam 、从键盘创建一个文件：$ cat > filename  只能创建新文件,不能编辑已有文件、将几个文件合并为一个文件： $cat file1 file2 > file .
        vi实际上是文件编辑命令，但是也可以查看文件;
}



ps -A | grep nginx 如果返回结果的话,说明有nginx在运行
