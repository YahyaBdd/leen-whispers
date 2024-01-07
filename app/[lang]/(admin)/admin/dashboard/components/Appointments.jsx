import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
function Appointments({appointments}) {
  return (
<div>
    <h3 className="text-xl font-bold tracking-tight py-6 pl-10">Appointments list</h3>
    <Table>
      <TableCaption>A list of your recent appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Full Name</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Service Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Staff</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments &&
          Object.keys(appointments).map((appointmentId, index) => {
            const fullName = `${appointments[appointmentId].firstName} ${appointments[appointmentId].lastName}`;
            const dateTime = `${appointments[appointmentId].date} ${appointments[appointmentId].time}`;

            return (
              <TableRow key={index}>
                <TableCell>{fullName}</TableCell>
                <TableCell>{dateTime}</TableCell>
                <TableCell>{appointments[appointmentId].service.description}</TableCell>
                <TableCell>{appointments[appointmentId].service.price}</TableCell>
                <TableCell>{appointments[appointmentId].staff}</TableCell>
                <TableCell>{appointments[appointmentId].phone}</TableCell>
                <TableCell>{appointments[appointmentId].email}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </div>
  )
}

export default Appointments