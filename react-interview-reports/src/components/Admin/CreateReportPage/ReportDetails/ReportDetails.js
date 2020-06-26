import React from 'react';
import { Select, Row, Col, DatePicker, Textarea } from 'react-materialize';
import styles from './ReportDetails.module.css';
const ReportDetails = ({ candidate, company, setDate, setPhase, setStatus, setNotes }) => {

  let interviewDate;
  let somePhase;
  let someStatus;
  let someNotes;
  const handleDateChange = (dateObj) => {

    interviewDate = dateObj.target.value;

  }

  const handlePhaseChange = (event) => {
    somePhase = event.currentTarget.value
  }

  const handleStatusChange = (event) => {
    someStatus = event.currentTarget.value
  }
  const handleNotesChange = (event) => {
    someNotes = event.currentTarget.value
    setNotes(someNotes);
  }


  const onChangeDate = (newDate) => {

    handleDateChange({
      target: {
        id: "myDate",
        value: newDate
      }
    })
  }

  const onChangePhase = (event) => {
    handlePhaseChange(event)
  }
  const onChangeStatus = (event) => {
    handleStatusChange(event)
  }
  const onChangeNotes = (event) => {
    handleNotesChange(event)

  }



  return (
    <div>
      <Row>

        <Col lg={4}>
          <DatePicker
            id="reportDate'"
            label="Interview Date:"
            required
            onChange={onChangeDate}
            options={{
              autoClose: false,
              container: null,
              defaultDate: null,
              disableDayFn: null,
              disableWeekends: false,
              events: [],
              firstDay: 0,
              format: 'mmm dd, yyyy',
              i18n: {
                cancel: 'Cancel',
                clear: 'Clear',
                done: 'Ok',
                months: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December'
                ],
                monthsShort: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ],
                nextMonth: '›',
                previousMonth: '‹',
                weekdays: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                weekdaysAbbrev: [
                  'S',
                  'M',
                  'T',
                  'W',
                  'T',
                  'F',
                  'S'
                ],
                weekdaysShort: [
                  'Sun',
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat'
                ]
              },
              isRTL: false,
              maxDate: null,
              minDate: null,
              onClose: (() => { setDate(interviewDate) }),
              onDraw: null,
              onOpen: null,
              onSelect: null,
              parse: null,
              setDefaultDate: false,
              showClearBtn: false,
              showDaysInNextAndPreviousMonths: false,
              showMonthAfterYear: false,
              yearRange: 10
            }}
          />
        </Col>
        <Col lg={4}>
          <Select

            id='reportPhase'
            label="Phase:"
            required
            multiple={false}
            onChange={onChangePhase}
            options={{
              classes: '',
              dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: (() => { setPhase(somePhase) }),
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250,

              }
            }}
            value='1'
          >
            <option value="1">

            </option>
            <option value="cv">
              cv
  </option>
            <option value="hr">
              hr
  </option>
            <option value="teach">
              teach
  </option>
            <option value="teach">
              final
  </option>
          </Select>
        </Col>
        <Col lg={4}>
          <Select
            required
            onChange={onChangeStatus}
            id='reportStatus'
            label="Status:"
            multiple={false}
            options={{
              classes: '',
              dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: (() => { setStatus(someStatus) }),
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value='1'
          >
            <option value="1">

            </option>
            <option value="passed">
              passed
    </option>
            <option value="declined">
              declined
    </option>
          </Select>
        </Col>

      </Row>
      <Row>
        <Col lg={12}>
          <Textarea className={styles.textarea}
            required
            id='reportNotes'
            label="Write something here..."
            onChange={onChangeNotes}
          />
        </Col>
      </Row>
      <h5>{candidate}</h5>
      <h5>{company}</h5>
    </div>
  )
}

export { ReportDetails }