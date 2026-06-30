<script setup> //handles logic for signing up
import { ref } from 'vue'
import {useAuth} from '../services/auth'
import {useRouter} from "vue-router";
const router = useRouter();                         //used to switch pages simillar to how buttons work

const {checkCredentials} = useAuth()                //just checks the credentials

//RULES
const rules = {
    required: value => !!value || 'Required.',                                //if statement using logic or so basically if value is there allow if not i.e !!show 'required'
    min: v => v.length >= 8 || 'Min 8 characters',                             //this is another rule that constrains the user to right a pass of min 8 chars
    passwordMatch: () => password == confirmPassword || 'Passwords must match'
  }

  //DATA MODELS                         
  const email = ref(null)                                           //nothing inputted in here yet on both fields i.e ref(null) on password
  const password = ref(null)          
  const showPassword = ref(false)
//FUNCTION
function login()                                    //definition of the function is by the parentheses and then we make an object within which we fit everything that we "call" after calling the function
{ 
    const data ={
      email: email.value,                              //ref basically is used to keep track of it and the .value is the one that changes and also ref remains constant
      password: password.value, 
    }
    checkCredentials(data)                                        //this is a function from the auth file and also it is called from auth.js
    router.push('/').then(()=>{                         //definition of a function??
      router.go(0)                                      //can be used to move to a page aswell i.e going to another page and in this case the homepage i.e the value 0
    });
    
}
</script>                                               <!--end of script code-->


 <template> <!-- this is what is displayed to the user the template encloses everthing and this usually works in html hence vite packs everything into css and html for display on the webpage -->
  
  <v-container align="center" class="mt-16">  <!--THE CONTAINER ENCLOSING EVERYTHING-->
    <v-row>                                                                                                             
      <v-col>
        <v-card max-width="80%" class="bg-primary"> <!--THIS IS THE CARD THAT WILL APPEAR BLUE I.E PARENT ELEMENT-->
          <v-img src="/logo.png" height="100" width="200" class="mt-4"></v-img>
          <v-card-title class="ma-5">Login</v-card-title>
          <v-divider></v-divider>
          <v-form class="ma-8">
       
            <v-row>
              <v-col md="4"> <!--EMAIL-->
                <div>
                  Email </div>
              </v-col>
              <v-col md="4">
                <v-text-field  v-model="email"></v-text-field>               <!--ROW ONE-->
              </v-col>
            </v-row>

             <v-row>
              <v-col md="4"> <!--PASSWORD-->                                      <!--ROW TWO-->
                <div>
                  Password </div>
              </v-col>
              <v-col md="3">
                <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"                 
                :rules="[rules.required, rules.min]"                              
                :type="showPassword ? 'text' : 'password'"              
                variant="outlined"
                @click:append="showPassword = !showPassword">
                </v-text-field>
              </v-col>                                                                                                                           
            </v-row>
            
            
              <v-row>
              <v-col md="6">
                <v-btn @click="login()" block>Sign Up</v-btn>
              </v-col>                                          <!--ROW SIX-->
              <v-col md="6">                                      <!--WHEN WE CALL THE FUNCTION USING REGISTER IT USUALLY CALLS THE INFORMATION WITHIN THE OBJECT OF THE FUNCTION I.E THE MODELS-->
                <div>
                  New user?
                  <router-link to="sign_up">Create Account</router-link>
                </div>
              </v-col> 
            </v-row>
              
              
                          
              
            
              
            
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

