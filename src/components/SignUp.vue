<script setup> //handles logic for signing up
import { ref } from 'vue'
import {useAuth} from '../services/auth'
import {useRouter} from "vue-router";
const router = useRouter();                         //used to switch pages simillar to how buttons work

const {signup} = useAuth()

const showPassword = ref(false)
const password = ref(null) 

const confirmPassword= ref(null)
const showConfirm = ref(false)
//RULES
const rules = {
    required: value => !!value || 'Required.', //if statement using logic or so basically if value is there allow if not i.e !!show 'required'
    min: v => v.length >= 8 || 'Min 8 characters', //this is another rule that constrains the user to right a pass of min 8 chars
    passwordMatch: () => password == confirmPassword || 'Passwords must match'
  }

  //DATA MODELS                         
const firstname = ref(null)              // Every single time someone loads the sign-up page fresh, firstname.value (and all the others) start back at null. There's no memory of what a previous visitor typed — each new page load creates a brand new ref(null), completely blank again.
const lastname = ref(null)
const email = ref(null)                 //these are constant variable and ref keeps track of the value in the text box and null keeps the textbox empty to allow a variety of people input their specific info i.e we dont want ppl to have a simillar name hence telling the computer to give everyone a blank value
const phone = ref(null)                   
const location = ref(null)
const address = ref(null)                


//FUNCTION
function register()                                    //definition of the function is by the parentheses and then we make an object within which we fit everything that we "call" after calling the function
{ 
    const data ={
      firstname: firstname.value,
      lastname: lastname.value,                       //these are objects where the value will be derived from the models for example in the null section when someone inputs their name the value is filled up by the ref on the models above in short null means "NOTHING YET"
      email: email.value,                              //ref basically is used to keep track of it and the .value is the one that changes and also ref remains constant
      phone: phone.value,
      location: location.value,
      address: address.value,
      password: password.value, 
      role:2,                                             //<--this refers to type of roles i.e having an admin or customer or even a middleman e.g a mod hence in such a scenario we can give out 3 roles
      
      //basically role 1 is for admin and role 2 is a customer
    }
    signup(data)                                        //this is a function from the auth file and also it is called from auth.js
    router.push('/').then(()=>{                         //definition of a function??
      router.go(0)                                      //can be used to move to a page aswell i.e going to another page
    });
    
}
</script>
 <template> <!-- this is what is displayed to the user the template encloses everthing and this usually works in html hence vite packs everything into css and html for display on the webpage -->
  
  <v-container align="center" class="mt-16">  <!--THE CONTAINER ENCLOSING EVERYTHING-->
    <v-row>                                                                                                             
      <v-col>
        <v-card max-width="80%" class="bg-primary"> <!--THIS IS THE CARD THAT WILL APPEAR BLUE I.E PARENT ELEMENT-->
          <v-img src="/logo.png" height="100" width="200" class="mt-4"></v-img>
          <v-card-title class="ma-5">Sign Up</v-card-title>
          <v-divider></v-divider>
          <v-form class="ma-8">


            <v-row>
              <v-col md="3"> <!--firstname col-->         
                <div>
                  First Name </div>
              </v-col>
              <v-col md="3">
                <v-text-field v-model="firstname"></v-text-field>         <!--ROW ONE-->
              </v-col>
              <v-col md="3">
                <div>Last Name</div>
              </v-col>
              <v-col md="3"> 
                <v-text-field v-model="lastname"></v-text-field>
              </v-col>
            </v-row>


            
            
            <v-row>
              <v-col md="3"> <!--EMAIL-->
                <div>
                  Email </div>
              </v-col>
              <v-col md="3">
                <v-text-field  v-model="email"></v-text-field>               <!--ROW TWO-->
              </v-col>
              <v-col md="3">
                <div>Phone</div>
              </v-col>
              <v-col md="3"> 
                <v-text-field type="number" v-model="phone"></v-text-field>
              </v-col>
            </v-row>

             <v-row>
              <v-col md="3"> <!--LOCATION-->
                <div>Location</div>
              </v-col>
              <v-col md="3">
                <v-select :items="['Nairobi', 'Mombasa', 'Meru', 'Kajiado', 'Thika']"  v-model="location"></v-select>        <!--ROW THREE-->
              </v-col>
              <v-col md="3">
                <div>Address</div>
              </v-col>
              <v-col md="3"> 
                <v-text-field  v-model="address"></v-text-field>
              </v-col>
            </v-row>

                         


             <v-row>
              <v-col md="3"> <!--PASSWORD-->                                      <!--ROW COMBINATIONS-->
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
              </v-col>                                                                                                                            <!--NB:BOTH ROW FOUR AND ROW FIVE ARE CONJOINED TOGETHER-->
            
                

            
            
                <v-col md="3">
                  <div>Confirm Password</div>       <!--CONFIRM PASSWORD-->                              <!--ROW COMBINATIONS-->
                </v-col>
                <v-col md="3">
                  <v-text-field 
                  v-model="confirmPassword" 
                  :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, rules.passwordMatch,]"
                  :type="showConfirm ? 'text' : 'password'"
                  variant="outlined"
                  @click:append="showConfirm = !showConfirm">
                </v-text-field>
              </v-col>
            </v-row>
                          

              <v-row>
              <v-col md="6">
                <v-btn @click="register()" block>Sign Up</v-btn>
              </v-col>                                          <!--ROW SIX-->
              <v-col md="6">                                      <!--WHEN WE CALL THE FUNCTION USING REGISTER IT USUALLY CALLS THE INFORMATION WITHIN THE OBJECT OF THE FUNCTION I.E THE MODELS-->
                <div>
                  Already Have An account?
                  <router-link to="login">Login</router-link>
                </div>
              </v-col> 
            </v-row>
              
              
                          
              
            
              
            
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

