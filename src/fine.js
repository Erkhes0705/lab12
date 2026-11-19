'use strict';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Хугацаа хэтэрсэн торгуулийг тооцно.
 * @param {string|Date} dueDate     буцаах ёстой огноо
 * @param {string|Date} returnDate  бодитоор буцаасан огноо
 * @param {number} ratePerDay       өдрийн торгууль (₮)
 * @returns {number} торгуулийн дүн (₮)
 */
function calculateFine(dueDate, returnDate, ratePerDay = 100) {
  const due = new Date(dueDate);
  const ret = new Date(returnDate);
  if (Number.isNaN(due.getTime()) || Number.isNaN(ret.getTime())) {
    throw new TypeError('Огноо буруу байна');
  }
  const lateDays = Math.ceil((ret - due) / MS_PER_DAY);
  return lateDays > 0 ? lateDays * ratePerDay : 0;
}

module.exports = { calculateFine };
