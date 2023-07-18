module.exports={
    SELECT : "SELECT * FROM teachers",
    SELECT_ID : "SELECT * FROM teachers WHERE id = $1 ",
    SELECT_LIKE: "SELECT * FROM teachers WHERE t_name ~~* $1 ",
    SELECT_POST: "INSERT INTO teachers(t_name , age) VALUES($1,$2) RETURNING * ",
    SELECT_PUT: "UPDATE  teachers SET t_name=$1 , AGE =$2 WHERE id = $3  RETURNING *",
    SELECT_DELETE: "DELETE FROM teachers WHERE id =$1 RETURNING * ",

}; 