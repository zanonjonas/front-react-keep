import { ZHeader } from '../organism/ZHeader'
import { ZLeftMenu } from '../organism/ZLeftMenu'
import { LeftMenuProvider } from '../context/LeftMenuContext'

function App() {
    return (
        <>
            <LeftMenuProvider>
                <ZHeader />
                <div>
                    <ZLeftMenu />
                </div>
                <footer></footer>
            </LeftMenuProvider>
        </>
    )
}

export default App
