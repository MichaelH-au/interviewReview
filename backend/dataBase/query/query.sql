select class from courses group by class having count(distinct student) >= 5

select t1.name as Customers from Customers t1 where t1.id not in (select t2.customerid from orders t2)

select e.Name as Employee from Employee e, Employee m where e.Salary > m.Salary and e.ManagerId = m.Id;

select a.FirstName, a.LastName, b.City, b.State from Person a left join Address b on a.PersonId = b.PersonId;

select b.Id from Weather a,Weather b where b.Temperature>a.Temperature and DATEDIFF(b.RecordDate,a.RecordDate)=1;

delete from person
where id not in
(select id
from (
select min(id) as id
from person
group by email) as t1);