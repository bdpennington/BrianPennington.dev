# Testing as a Cost Savings and Reliability Practice

Automation, primary those practices driven into modern development by DevOps and "Agile" methodologies, has been proven over and over to drastically increase the business value of scale, reliability, quality, velocity (productivity), and impact for companies that adopt those practices. __Automated testing__, by and large, is a mandatory and integral part of making other automated processes possible and useful. Automated and continuous integration/delivery is impossible, or at least irresponsible, without automated testing. Studies have shown that defect density reduction far exceeds the increase in initial development time, providing significant cost savings.

## Cost Savings

### Defect Density & Up-front Development Cost

A study conducted by Microsoft and IBM teams to measure the effects of Test-Driven Development practices reported that the average pre-release defect density was reduced by 40%-90%.[^1] It also concludes an increase up-front development time increase of 15%-35%, which the study admits is “subjectively estimated by management.”

This means that while tasks take a little longer to develop up front, there is a massive savings on the back-end of a project, including that of its maintenance lifecycle. Furthermore, because defects are prevented from ever occurring, the duration a project or feature must spend in the manual testing environment of QA, and the time spent in maintenance working through escalations will similarly reduced be at least by the same 40%-90%.

## The Many Benefits of Preventing Defects Up Front

### Fast Feedback

<br>

#### For the Developer Creating a Feature

When a developer writes automated tests for his/her code, whether immediately before or after writing it, they are provided feedback about the quality of their code on the order of seconds and minutes. This helps them to deal with defects then and there, while the problem is still fresh in their mind. The alternative is to wait days or weeks for feedback from the QA team (or worse, the customer), when the developer has moved on to other things -- this also results in time costs associated with interruptions.

#### For Other Developers Working Within the Codebase

A robust suite of automated tests will also inform other developers working within a codebase if they've broken something downstream from the feature they're working on. Again, this is fast feedback on the order of seconds and minutes, rather than the catastrophic alternative.

## Testing as a Gateway to Further Automation

### Confidence to Trust Automated Deployments

A strong and automated testing suite gives companies, teams, and developers the confidence necessary to "trust automation." No person is their right mind would allow automated deployments, even of low-risk code, without a proven track record that only defect-free code will be released into production environments.

### Automation Lets Teams Focus on What Matters

When code integration and delivery are automated, teams can spend more of their time focused on the tasks that matter, rather than trying to push their work through a series of bottlenecks (extremely time consuming).

### Without Automated Testing, It Can Be Difficult to Find Other Bottlenecks

As Kent Beck, author of the Extreme Programming series, calls out: making consistent and incremental improvements to the tightest bottlenecks will eventually relieve that pressure, and point you to the next tightest bottleneck, whether that be another development process, or some other system within a business.[^2] This, he argues, is a good thing because it naturally points stake-holders to the next place to start applying incremental improvements.

## Team / Developer Experience

According to the State of DevOps Report, 2021[^3], teams with high adoption of these practices (like test-first development) report that:

- They can deploy on demand (as opposed to weeks+)
- Lead-time for changes are less than an hour (as opposed to days/weeks+)
- Mean-time to Recovery (MTTR) is less than an hour (as opposed to days+)
- Experience change failure rates of <5% (as opposed to <15%).

### Resistance to Adoption

The report also says that "for most IT teams trying to modernize, their biggest hurdle is lack of bandwidth, being constantly in fire-fighting mode, and working in a primarily interrupt-driven manner."

The evidence provided above suggests that if a strategy implementing a robust suite of automated tests, built upon test-first development practices, we should be able to drastically reduce the time spent doing things that prevent the adoption of improved and more modern development methodologies, whatever a team decides that means to them.

## References

[^1]: <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2009/10/Realizing-Quality-Improvement-Through-Test-Driven-Development-Results-and-Experiences-of-Four-Industrial-Teams-nagappan_tdd.pdf">Realizing quality improvement through test driven development: results and experiences of four industrial teams</a>

[^2]: <a href="https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658/" target="_blank">Extreme Programming Explained: Embrace Change, 2nd Edition</a> (Amazon)

[^3]: <a href="https://www2.circleci.com/2021-puppet-state-of-devops.html" target="_blank">2021 State of DevOps Report</a>
