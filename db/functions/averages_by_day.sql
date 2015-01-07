create or replace function averages_by_day (uid integer)
returns table () AS $$
declare
begin

    return query
    select avg(t.tip::decimal), avg(t.sales::decimal), t.day
    from tips t
    inner join expenses e on e.user_id = t.user_id
    where t.user_id = uid
    group by t.day;

end;
$$ language plpgsql;