import React from 'react'
import { Card } from 'react-bootstrap'
import DrugTable from './DrugTable'

export default function ViewRegisteredDrugs() {
    return (
        <div>
            <Card className='man_card shadow p-3'>
                <h3 className='man_card_title'>Registered Drugs</h3>
                <DrugTable/>
            </Card>
        </div>
    )
}
