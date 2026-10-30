import AreaPage from '../components/AreaPage'
import { SERVICE_AREAS } from '../config/site'

export default function Page() {
  const area = SERVICE_AREAS.find((item) => item.slug === 'deer-lodge-mt')!
  return <AreaPage area={area} />
}
