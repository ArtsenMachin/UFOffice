from resources import DB


async def task_status_upd(task_id):

    await DB.conn.fetch(
        f'''
            update ufoffice.task_status
                set task_status_name_id=2
                where task_id={int(task_id)};
        '''
    )

    return 'success'
