import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Avatar, Button, Select, SelectItem, Textarea } from '@nextui-org/react'
import { SERVICES } from '../../constants/ourServices'
import { formatMoney } from '../../ultils/formatMoney'
import { DatePicker } from '@nextui-org/date-picker'
import { useState } from 'react'
import DoctorsAvailableTable from '../tables/DoctorsAvailableTable'
import { useFindDoctor } from '../../hooks/useFindDoctor'
import { DAYS_OF_WEEK } from '../../constants/daysOfWeek'
import { parseDate } from '@internationalized/date'
import { useAuthContext } from '../../contexts/AuthContext'

const BookingSchema = Yup.object().shape({
    bookingDate: Yup.date().required('Booking date is required'),
    serviceId: Yup.string().required('Please select a service'),
})

function CustomerBookingAppointmentForm() {
    const { authUser } = useAuthContext()
    const [doctors, setDoctors] = useState([])
    const [isShowDoctors, setIsShowDoctors] = useState(false)
    const [staffId, setStaffId] = useState('')
    const { findDoctor } = useFindDoctor()
    const formik = useFormik({
        initialValues: {
            bookingDate: '2024-11-18',
            serviceId: '',
        },
        validationSchema: BookingSchema,
        onSubmit: (values) => {
            const newBooking = {
                bookingDate: values.bookingDate,
                serviceId: values.serviceId,
                staffId: staffId,
                customerId: authUser.id,
            }
            // TODO: Connect API Bookings
            console.log('Booking submitted:', newBooking)
        },
    })

    const handleFindDoctor = async () => {
        const bookingDate = new Date(formik.values.bookingDate)
        if (isNaN(bookingDate)) {
            alert('Invalid booking date')
            return
        }
        const getDayBooking = bookingDate.getDay()
        const dayText = DAYS_OF_WEEK[getDayBooking]

        const doctorsFound = await findDoctor(dayText)
        setDoctors(doctorsFound)
        setIsShowDoctors(true)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="border py-5 px-10 mx-auto max-w-[1000px] flex flex-col gap-10 rounded-xl">
                <p className="text-center font-bold text-xl uppercase">Booking Appointment Form</p>
                <div className="grid grid-cols-2 gap-5">
                    <Select
                        items={SERVICES}
                        label="What service do you need?"
                        aria-label="service"
                        placeholder="Select a service"
                        labelPlacement="outside"
                        name="serviceId"
                        id="serviceId"
                        onChange={formik.handleChange}
                        value={formik.values.serviceId}
                        classNames={{
                            base: 'w-full',
                            trigger: 'h-12',
                        }}
                        renderValue={(items) => {
                            return items.map((item) => (
                                <div key={item.key} className="flex items-center gap-2">
                                    <Avatar alt={item.data.name} className="flex-shrink-0" size="sm" src={item.data.avatar} />
                                    <div className="flex flex-col">
                                        <span>{item.data.nameservice}</span>
                                        <span className="text-default-500 text-tiny">{formatMoney(item.data.price)}</span>
                                    </div>
                                </div>
                            ))
                        }}
                    >
                        {(service) => (
                            <SelectItem key={service.id} textValue={service.name}>
                                <div className="flex gap-2 items-center">
                                    <Avatar alt={service.name} className="flex-shrink-0" size="sm" src={service.avatar} />
                                    <div className="flex flex-col">
                                        <span className="text-small">{service.nameservice}</span>
                                        <span className="text-tiny text-default-400">{formatMoney(service.price)}</span>
                                    </div>
                                </div>
                            </SelectItem>
                        )}
                    </Select>
                    <DatePicker
                        label="When do you need my help?"
                        labelPlacement="outside"
                        showMonthAndYearPickers
                        className="w-full"
                        name="bookingDate"
                        id="bookingDate"
                        value={parseDate(formik.values.bookingDate)}
                        onChange={(date) => {
                            const day = new Date(date)
                            const formart = day.toISOString().split('T')[0]
                            return formik.setFieldValue('bookingDate', formart)
                        }}
                        aria-label="date"
                    />
                </div>
                <Button color="success" className="text-white" onClick={handleFindDoctor} type="button">
                    Find Doctor Available
                </Button>
                {isShowDoctors && (
                    <div>
                        <p className="mb-2 font-medium">Doctors Available</p>
                        {doctors.length === 0 && <p>There are no doctors available for your requested schedule.</p>}
                        {doctors.length > 0 && <DoctorsAvailableTable data={doctors} setStaffId={setStaffId} staffId={staffId} />}
                    </div>
                )}
                <Textarea label="Note" aria-label="note" placeholder="Tell me about your detailed requirements here" name="note" onChange={formik.handleChange} value={formik.values.note} />
                <Button type="submit" color="primary" className="font-semibold">
                    Create Booking
                </Button>
            </div>
        </form>
    )
}

export default CustomerBookingAppointmentForm
