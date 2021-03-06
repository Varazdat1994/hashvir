import React, { useState } from 'react'


const SalaryPage = () => {

    const [ready, setReady] = useState(true)
    const [startSalary, setStartSalary] = useState()
    const [kutakayin, setKutakayin] = useState()
    const [ekamtayin, setEkamtayin] = useState()


    const [finalSalary, setFinalSalary] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements);
        const salary = e.target.elements[1].value
        setStartSalary(salary)
        const kut = salary * e.target.elements[2].value / 100
        setKutakayin(kut)
        const ekamt = salary * e.target.elements[3].value / 100
        setEkamtayin(ekamt)
        setFinalSalary(salary - kut - ekamt - 1000)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="salary">
                    <label className="salary-label">Աշխատավարձ</label><br />
                    <select className="salary-select"  >
                        <option value="1">Մաքուր</option>
                        <option value="2">Կեղտոտ</option>
                    </select>
                    <br />
                    <label className="salary-tt">Աշխատավարձ Չափը</label><br />
                    <input type='number' className="salary-price" />
                    <br />
                    <label className="salary-kut">Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով</label><br />
                    <select className="salary-select-kut"  >
                        <option value="2.5">Այո, կամավոր՝ միացած 07/2018-ից հետո</option>
                        <option value="2.5">Այո, պարտադիր կամ մինչ 07/2018 միացած կամավոր</option>
                        <option value="0">Չեմ Մասնակցում</option>
                    </select>
                    <br />
                    <label className="salary-tt">Արդյո՞ք աշխատում եք ՏՏ ոլորտի հարկային արտոնություններից օգտվող ընկերությունում։
            </label>
                    <br />
                    <select className="salary-select-tt" >
                        <option value="10">Այո</option>
                        <option value="23">Ոչ</option>
                    </select>
                    <br /><br />
                    <button type="submit" className="btn calc-btn"  >Հաշվել</button>
                </div>
                {ready ?
                    <>
                        <h3>Աշխատավարձ {startSalary}</h3>
                        <h2>Եկամտային հարկ {ekamtayin}</h2>
                        <h2>Կուտակային կենս․ {kutakayin}</h2>
                        <h2>Դրոշմանշային վճար 1000</h2>
                        <h2>Արդյունք {finalSalary}</h2>
                    </>
                    : null}
            </form>
        </>
    )
}


export default SalaryPage