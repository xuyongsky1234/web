function checkUser(){
				var Username=document.getElementById('login_username').value;
				var Password=document.getElementById('login_password').value;
				
				if(Username==""||Username==null){
					alert("The Username can't be null");
					return false;
				}
				if(Password==""||Password==null){
					alert("The Password can't be null");
					return false;
				}
				else
				{
					return true;
				}
			}
