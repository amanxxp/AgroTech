import { Button } from './ui/button'
import { Card } from './ui/card'

export default function LayoutSelection() {
  return (
    <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Select a Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">LAYOUT 1</h3>
          <p className="text-green-600 font-bold">RETURN: 1,00,000 INR</p>
          <Button className="w-full">Select Layout 1</Button>
        </Card>
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">LAYOUT 2</h3>
          <p className="text-green-600 font-bold">RETURN: 1,35,000 INR</p>
          <Button className="w-full">Select Layout 2</Button>
        </Card>
      </div>
    </div>
  )
}

