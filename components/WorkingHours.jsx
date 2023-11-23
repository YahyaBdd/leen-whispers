export default function WorkingHours({dict}) {
  return (
    <section className="py-8 ct-table content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT */}
          <div className="col-lg-6">
            <div className="left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">{dict.sectionId}</span>
              {/* Title */}
              <h2 className="h2-md">{dict.title}</h2>
              {/* Text */}
              <p className="mb-0">{dict.text}</p>
            </div>
          </div>
          {/* TABLE */}
          <div className="col-lg-6">
            <div className="txt-table right-column wow fadeInLeft">
              <table className="table">
                <tbody>
                  <tr>
                    <td>{dict.days.monWed}</td>
                    <td> - </td>
                    <td className="text-end">{dict.hours.monWed}</td>
                  </tr>
                  <tr>
                    <td>{dict.days.friday}</td>
                    <td> - </td>
                    <td className="text-end">{dict.hours.friday}</td>
                  </tr>
                  <tr className="last-tr">
                    <td>{dict.days.sun}</td>
                    <td>-</td>
                    <td className="text-end">{dict.hours.sun}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>{" "}
          {/* END TABLE */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  )
}
