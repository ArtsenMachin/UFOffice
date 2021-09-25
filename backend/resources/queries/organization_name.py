from resources import DB


async def get_organization_name(user_id):

    result = await DB.conn.fetch(
        f'''
            select
                org.org_name
            from
                ufoffice.users us
            join ufoffice.org_participants opt
                on opt.user_id = us.user_id
            join ufoffice.organizations org
                on org.org_id = opt.org_id
            where
                us.user_id = {user_id};
        '''
    )

    return str(result[0]['org_name'])
