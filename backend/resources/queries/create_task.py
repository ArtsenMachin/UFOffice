from resources import DB


async def task_crt(
    task_name,
    task_desc,
    end_dt,
    ach_pts,
    user_id
):

    await DB.conn.fetch(
        f'''
            insert into ufoffice.tasks (
                task_name,
                task_desc,
                end_dt,
                ach_pts
            )
                values (
                    '{task_name}',
                    '{task_desc}',
                    '{end_dt}'::date,
                    {int(ach_pts)}
                );
        '''
    )

    await DB.conn.fetch(
        f'''
            insert into ufoffice.user_tasks (
                user_id,
                task_id
            )
                values (
                    {int(user_id)},
                    (select max(task_id) from ufoffice.tasks)
                );
        '''
    )
    
    await DB.conn.fetch(
        f'''
            insert into ufoffice.task_status (
                task_status_name_id,
                task_id
            )
                values (
                    1,
                    (select max(task_id) from ufoffice.tasks)
                );
        '''
    )
    
    return 'success'
