from resources import DB
from resources.services import json_serializable
import json


async def get_user_tasks(org_id=1):

    users = await DB.conn.fetch(
        f'''
            select
                us.user_fio,
                pr.profession_name,
                us.user_id
            from
                ufoffice.users us
            join ufoffice.professions pr
                on pr.profession_id = us.profession_id
            join ufoffice.org_participants org
                on org.org_id = {org_id}
                and org.user_id = us.user_id;
        '''
    )
    
    result = json_serializable(f'tasks_org_{org_id}')

    for item in users:
        result.add_features('name', str(item['user_fio']))
        result.add_features('proffesion', str(item['profession_name']))
        result.add_features('id', str(item['user_id']))
        
        result.add_feature_list('tasks')

        tasks = await DB.conn.fetch(
            f'''
                select
                    ts.task_name,
                    to_char(ts.end_dt, 'dd.mm.yyyy') end_dt,
                    ts.ach_pts,
                    ts.task_desc,
                    tsnm.task_status_sysname,
                    ts.task_id,
                    us.user_id
                from
                    ufoffice.users us
                join ufoffice.user_tasks ust
                    on ust.user_id = us.user_id
                join ufoffice.tasks ts
                    on ts.task_id = ust.task_id
                join ufoffice.task_status tst
                    on tst.task_id = ts.task_id
                join ufoffice.task_status_name tsnm
                    on tsnm.task_status_name_id = tst.task_status_name_id
                where
                    us.user_id = {str(item['user_id'])}
            '''
        )
        for task in tasks:
            result.data[result.t_index]['tasks'].append(
                {
                    'name': task['task_name'],
                    'time': task['end_dt'],
                    'level': task['ach_pts'],
                    'description': task['task_desc'],
                    'status': task['task_status_sysname'],
                    'id': task['task_id'],
                    'user_id': task['user_id']
                }
            )

        result.new_features_tuple()

    return json.dumps(result.data[:-1], indent=2)
