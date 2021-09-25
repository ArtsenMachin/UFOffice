from resources.services import hash_pass, json_serializable
from resources import DB


async def check_user_login(login, password):
	try:
		
		data = await DB.conn.fetch(
			'''select 
				u.username, 
				u.user_password, 
				u.user_id
			from 
				ufoffice.users u
			'''
			)

		for item in data:
			if login.lower() == item['username'] and hash_pass.hash_check(item['user_password'], password) == True:
				result = json_serializable('rsp')
				result.add_features('login', str(item['username']))
				result.add_features('token', str(item['user_id']))
				
				return result.data[0]	
		
		return 'wrong'
	
	except Exception as e:
		print('Exceprion: ', e)
