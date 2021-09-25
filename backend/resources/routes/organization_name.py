from flask import request
from resources import DB

from resources import app
from resources.queries import get_organization_name


@app.get('/organization')
async def organization():
    try:
        await DB.connect()

        output = await get_organization_name(request.args['user_id'])

        await DB.close()

        return output

    except Exception as e:
        print(e)
