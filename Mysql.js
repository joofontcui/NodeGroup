/**
 * Created by Cuijun on 2016/12/17.
 */
function excel拼sql语句(){
    ="insert into course_cate (catecode,name_catecode,father_catecode) values ("&B6&",'"&C6&"',"&D6&");"
}

function sohu-zhoulin(){

    select media_id,count(1) from section  where valid_status=4 GROUP BY media_id HAVING count(1) > 1;
}


function 外网连接数据库(){

    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'Go2mysql' WITH GRANT OPTION;
    flush privileges;

}


