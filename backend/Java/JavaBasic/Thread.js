/**
 *  Difference between thread and runnable
 *  1. share resource
 *  2. inherit multiple interface
 */

/**
 * sleep()  wait()
 * sleep is the function of Thread class
 * wait is the function of class
 *
 * Thread.sleep() will not release lock
 *
 * both sleep and wait will stop the current thread
 * but wait need notify/notifyAll to get the CPU back
 */