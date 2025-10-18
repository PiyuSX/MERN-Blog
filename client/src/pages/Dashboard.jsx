import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Dashprofile from "../components/Dashprofile"
import Dashsidebar from "../components/Dashsidebar"

const Dashboard = () => {
    const location = useLocation()
    const [tab, setTab] = useState('')
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
    }, [location.search])
  return (
    <div className="flex gap-6 md:flex-row flex-col bg-[var(--bg-colour)]">
      <Dashsidebar tab={tab} />
      {/* To show Profile */}
      <div className="w-full md:mt-16">
      {tab === 'profile' && <Dashprofile />}
      </div>
    </div>
  )
}

export default Dashboard