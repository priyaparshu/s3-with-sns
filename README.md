# s3-with-sns
In this example we will create two lambdas. when an file is added to a specific s3 bucket, an s3Object created event will be triggered which will in turn send a msg through sns. When a file is deleted, this in turn will trigger s3 object removed event.
