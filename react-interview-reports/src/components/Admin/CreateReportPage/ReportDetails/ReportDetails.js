import React from 'react';
import { Select, Row, Col, DatePicker, Textarea } from 'react-materialize';
const ReportDetails = ({candidate, company}) => {
  return (
    <div>
      <Row>

        <Col lg={4}>
          <DatePicker
            id="reportDate'"
            label="Interview Date:"
            required
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
              onClose: null,
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
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value="2"
          >
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
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value="2"
          >
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
          <Textarea
            required
            id='reportNotes'
            label="Write something here..."
          />
        </Col>
      </Row>
          <h5>{candidate}</h5>
          <h5>{company}</h5>
    </div>
  )
}

export { ReportDetails }