export async function UseConnection(connection, callback, query)
{
    await connection.query(query, function (err, results){
        if(err)
        {
            console.log(err)
            callback('error: '+ query, 500)
            throw err
        }

        callback(results, 200)
    })
}