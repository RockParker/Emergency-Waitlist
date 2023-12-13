import {connection} from '../server.js'

export async function UseConnection(callback, query)
{
    await connection.query(query, function (err, results){
        if(err)
        {
            console.log(err)
            callback('error: '+ query, 500)
        }

        callback(results, 200)
    })
}