from flask import request
from resources import DB
from resources import app
from resources.queries import leaderboard, leaderboard_place


@app.get('/leaderboard')
async def leaderboard_fnc():
    try:
        await DB.connect()

        user_id = request.args['user_id']
        output = await leaderboard(user_id)
        
        await DB.close()

        return output

    except Exception as e:
        print(e)


@app.get('/userrating')
async def user_rating():
    try:
        await DB.connect()

        user_id = request.args['user_id']
        output = await leaderboard_place(user_id)
        
        await DB.close()

        return output

    except Exception as e:
        print(e)