import GenerateReport from '../features/route/details/generateReports'
import QuickActions from '../features/route/details/quickActions'
import Register from '../features/route/details/register'
import Graph from '../features/route/details/graph'

export default function Details() {
  return (
    <div className='flex w-[100%] justify-between mt-8 '>
      <div className="generate_reports_section w-[670px] mx-2">
     <GenerateReport />
     <Register />
     <Graph />
      </div>
      <div className='w-[25%] h-[100%] bg-primary mr-4 rounded-xl py-5 px-0 flex flex-col'>

     <QuickActions /> 

      </div>
    </div>
  )
}
