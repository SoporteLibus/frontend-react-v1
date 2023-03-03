import '../../styles/home.css'
import Card from '../../lib/Card'

export default function Home(){
    return (
        <div className='main-container'>
            <div className="container">
                <Card image="/images/milacron.png" link="/app/v1/milacron" >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                        mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                        inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
                    </p>
                </Card>
                <Card image="/images/bmb.png" link="/app/v1/bmb" >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                        mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                        inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
                    </p>
                </Card>
                <Card image="/images/arburg.png" link="/app/v1/arburg" >
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                        mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                        inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
                    </p>
                </Card>
            </div>
        </div>
    )
}